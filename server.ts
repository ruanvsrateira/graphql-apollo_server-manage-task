import 'reflect-metadata';
import { resolve } from 'path';
import { connect } from 'mongoose';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { TaskResolver } from './resolver/task.resolver';


async function bootstrap() {    
    await connect('mongodb+srv://ruanvsrateira:Senac123@cluster0.vnma9pt.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('conectado ao banco de dados'))
        .catch((err) => console.log('algo deu errado!', err));

    const schema = await buildSchema({
        resolvers: [TaskResolver],
        emitSchemaFile: resolve(__dirname, 'schema.gql')
    });
    
    const server = new ApolloServer({
        schema,
    });

    const { url } = await server.listen();
    console.log('Servidor rodando no link => ', url);
};

bootstrap();