class Alojamientos extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
      <style>
        
        
      </style>
      <button class="send-button">Enviar</button>
      `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      let response = await fetch('https://catalegdades.caib.cat/resource/j2yj-e83g.json')
      const data = await response.json()

      const newArray = data.map(item => {
        if (item.geocoded_column &&
            item.geocoded_column.type &&
            Array.isArray(item.geocoded_column.coordinates) &&
            item.geocoded_column.coordinates.length === 2) {
          return {
            ...item,
            type: item.geocoded_column.type,
            latitud: item.geocoded_column.coordinates[1],
            longitud: item.geocoded_column.coordinates[0]
          }
        } else {
          return {
            ...item,
            type: null,
            latitud: null,
            longitud: null
          }
        }
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/alojamientos`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newArray)
      })
    })
  }
}

customElements.define('alojamientos-component', Alojamientos)
