import * as Sequelize from 'sequelize';
import { ProductGalleryAttributes} from './_interface_/product_gallery';
import { SequelizeAttributes } from '../../../types';

export type ProductGalleryInstance = Sequelize.Instance<ProductGalleryAttributes> & ProductGalleryAttributes

export const ProductGalleryInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductGallery: SequelizeAttributes<ProductGalleryAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    product_id: {
      type: Sequelize.UUIDV4,
      allowNull: false,
      unique: true
    },
    image: {
      type: Sequelize.ARRAY,
      allowNull: false,
      unique: true
    },
    createAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
  return sequelize.define<ProductGalleryInstance, ProductGalleryAttributes>('product_gallery', ProductGallery, {
    tableName: 'product_gallery'
  })
}