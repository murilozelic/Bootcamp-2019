import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.DECIMAL(10, 2),
        height: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  updateAge(newAge) {
    this.age = newAge;
  }

  updateHeight(newHeight) {
    this.height = newHeight;
  }

  updateWeight(newWeight) {
    this.weight = newWeight;
  }
}

export default Student;
