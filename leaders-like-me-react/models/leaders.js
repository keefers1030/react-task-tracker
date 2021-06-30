const leaders = (connection, Sequelize) => {
  return connection.define('leaders',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      image: {type: Sequelize.STRING }, 
      category: {type: Sequelize.ENUM('SCIENCE', 'TECHNOLOGY', 'ENGINEERING', 'ARTS', 'MATH', 'SOCIAL JUSTICE')},
      community: {type: Sequelize.ENUM('FEMALE','BIPOC', 'AAPI', 'LGBTQIA', 'DISABLED', 'NEURODIVERGENT')},
      community2: {type: Sequelize.ENUM('FEMALE','BIPOC', 'AAPI', 'LGBTQIA', 'DISABLED', 'NEURODIVERGENT', 'NA')},
      link: {type: Sequelize.STRING },
      slug:{ type: Sequelize.STRING, unique: true },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
  })
}

module.exports = leaders
