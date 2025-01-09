'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.SchoolSubject, { // Tem várais matérias
				foreignKey: 'user_id',
				as: 'subjects'	
			})
		}
	}
	User.init({
		name: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [3, 30], // Tamanho entre 3 a 40 caracteres
					msg: 'O nome campo deve ter no mínimo 3 caracteres e no máximo 40 caracteres.'
				}
			}
		},
		phone: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: {
					args: true, // Ou seja, deve ser um email
					msg: 'O e-mail digitado não é valido, por favor, tente novamente.'
				}
			}
		},
		password: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'User',
		tableName: 'users',
		paranoid: true
	});
	return User;
};