import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      login: { type: DataType.STRING, field: 'login' },
      password: { type: DataType.STRING, field: 'password' },
      userId: { type: DataType.INTEGER, field: 'userId' },
      userAddress: { type: DataType.STRING, field: 'userAddress' },
      package: { type: DataType.STRING, field: 'package' },
      nftId: { type: DataType.INTEGER, field: 'nftId' },
      isActivated: { type: DataType.STRING, field: 'isActivated' },
    },
    {
      tableName: 'user',
      timestamps: false,
    }
  );

  return User;
};
