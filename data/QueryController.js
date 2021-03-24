import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../util/mongodb'

const { MONGODB_DB } = process.env

export const getAllTodos = async () => { 

    const { client } = await connectToDatabase();

    const db = await client.db(MONGODB_DB);
    
    const collection = db.collection('todo');

    const allTodos = await collection.find({}).toArray();

    return toJSON(allTodos)
}

export const getAllTodoIds = async () => {

    const { client } = await connectToDatabase();

    const db = await client.db(MONGODB_DB);
    
    const collection = db.collection('todo');

    const todoIds = await collection.find({}, { _id: 1 }).toArray();

    const ids = todoIds.map(item => `${item._id}`);

   return ids
}

export const getTodo = async ({id}) => {
    const { client } = await connectToDatabase();

    const db = await client.db(MONGODB_DB);
    
    const collection = db.collection('todo');

    const todo = await collection.findOne({_id: ObjectId(id)}); 

    return toJSON(todo)
}

const toJSON = (input) => {
    const whatType = typeof input

    switch(whatType) {
        case 'object':
           {
               const inputKeys = Object.keys(input);

               inputKeys.map((key)=>{
                   const value = input[key]
                  return toJSON(value)
               })

           }
          
        case 'string' || 'number' || 'boolean':
            return stringify(input);
           
        default:
            return input;
    }
}

const stringify = (item) => JSON.stringify(item)



