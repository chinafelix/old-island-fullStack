
module.exports = app => {
  const { INTEGER, STRING, DATEONLY } = app.Sequelize

  const basicFields = {
    id: {
      type: INTEGER(11),
      primaryKey: true,
      autoIncrement: true
    },
    status: INTEGER(6),
    image: STRING(64),
    content: STRING(300),
    pubdate: DATEONLY,
    fav_nums: INTEGER(6),
    title: STRING(50),
    type: INTEGER(11)
  }

  const Sentence = app.model.define('sentence',basicFields)


  Sentence.getData = async (id) => {
    const data = await Sentence.findOne({
      where: {
        id
      }
    })

    return data || {}
  }


  return Sentence
}