'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class SchoolSubject extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			SchoolSubject.belongsTo(models.User, { // Pertence à um Usuário
				foreignKey: 'user_id',
				as: 'user'			
			})

			SchoolSubject.hasMany(models.Notes, { // Tem várias anotações
				foreignKey: 'subject_id',
				as: 'notes'
			})
		}
	}
	SchoolSubject.init({
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		color: DataTypes.STRING,
		user_id: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'SchoolSubject',
		tableName: 'school_subjects',
		paranoid: true
	});
	return SchoolSubject;
};