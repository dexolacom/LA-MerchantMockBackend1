import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'user_id',
      },
      NFT_id: { type: DataType.INTEGER, field: 'NFT_id' },
      is_waitlist: { type: DataType.BOOLEAN, field: 'is_waitlist' },
      is_activated_NFT: { type: DataType.BOOLEAN, field: 'is_activated_NFT' },
      NFT_status: { type: DataType.STRING, field: 'NFT_status' },

      login: { type: DataType.STRING, field: 'login' },
      password: { type: DataType.STRING, field: 'password' },
      package: { type: DataType.STRING, field: 'package' },
      expiration: { type: DataType.STRING, field: 'expiration' },
    },
    {
      tableName: 'user',
      timestamps: false,
    }
  );

  return User;
};
