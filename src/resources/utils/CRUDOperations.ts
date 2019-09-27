import db from "../../database/models"
import { OK, BAD_REQUEST, NOT_FOUND, CREATED } from '../../constants/StatusCodes';

class CRUDOperations {

    protected model: string = ''

    public createOne = async (req: any, res: any) => {
        try {
            const result = await db[this.model].create(req.body)
            res.status(OK).json({
                status: OK,
                data: result
            })
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
    public readOne = async (req: any, res: any, next: any) => {
        try {
            const { id } = req.params
            const result = await db[this.model].findOne({
                where: {
                    id
                },
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                }
            })
            if (result) {
                return res.status(OK).json({
                    status: OK,
                    result
                })
            }
            return res.status(NOT_FOUND).json({
                status: NOT_FOUND,
                message: 'Not Found'
            })
        } catch (error) {
            return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
    public update = async () => { }
    public deleteOne = async (req: any, res: any, next: any) => {
        try {
            const result = await db[this.model].destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(CREATED).json({
                status: CREATED,
                count: result.length,
                rows: result,
            })
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            });
        }
    }
    public getMany = async (req: any, res: any, next: any) => {
        try {
            const result = await db[this.model].findAll({
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                }
            })
            res.status(OK).json({
                status: 200,
                count: result.length,
                rows: result,
            })
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            });
        }
    }

    public getManyByID = async (req: any, res: any, next: any) => {
        try {
            const result = await db[this.model].findAll({
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                },
                where: { id: req.params.id }
            })
            res.status(OK).json({
                status: 200,
                count: result.length,
                rows: result,
            })
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            });
        }
    }
}
export default CRUDOperations;