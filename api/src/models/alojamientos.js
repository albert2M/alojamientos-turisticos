module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Alojamientos = sequelize.define('Alojamientos',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      signatura: {
        type: DataTypes.STRING
      },
      denominaci_comercial: {
        type: DataTypes.TEXT
      },
      grup: {
        type: DataTypes.STRING
      },
      subgrup: {
        type: DataTypes.STRING
      },
      inici_d_activitat: {
        type: DataTypes.DATEONLY
      },
      estat: {
        type: DataTypes.STRING
      },
      municipi: {
        type: DataTypes.STRING
      },
      localitat: {
        type: DataTypes.STRING
      },
      direcci: {
        type: DataTypes.TEXT
      },
      utm_x: {
        type: DataTypes.DECIMAL
      },
      utm_y: {
        type: DataTypes.DECIMAL
      },
      places: {
        type: DataTypes.INTEGER
      },
      unitats: {
        type: DataTypes.INTEGER
      },
      explotador_s: {
        type: DataTypes.TEXT
      },
      geocode_type: {
        type: DataTypes.STRING
      },
      coordinate: {
        type: DataTypes.INTEGER
      },
      latitud: {
        type: DataTypes.DOUBLE
      },
      longitud: {
        type: DataTypes.DOUBLE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'alojamientos',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Alojamientos.associate = function (models) {

  }

  return Alojamientos
}
