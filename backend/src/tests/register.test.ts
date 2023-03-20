import { describe, test } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { app } from '..';
import { User } from '../database/models/user.model';
import {
  mockUser,
  mockUserSameEmail,
  mockUserWithoutUsername,
  mockUserWithoutEmail,
  mockUserInvalidEmail,
  mockUserWithoutPassword,
  mockUserInvalidPassword,
  mockValidUser,
  mockRegisterModelReturn
} from './mocks/users.mock';
import { messageErrors } from '../utils/statusCodes';
import { Response } from 'superagent';

chai.use(chaiHttp);
const { expect, request } = chai;


describe('Testa a rota POST /register', () => {
  beforeEach(sinon.restore);

  describe('1 - Ao passar email existente', () => {
    test('Retorna erro 409 e a mensagem "Email already in use"', async () => {
      sinon.stub(User, 'findOne').resolves(mockUser as any);

      const response = await request(app)
        .post('/register')
        .send(mockUserSameEmail);

      expect(response).to.have.status(409);
      expect(response.body).to.be.deep.equal({ message: messageErrors.USER_REGISTER });
    });
  });

  describe('2 - Ao não passar um username', () => {
    test('Retorna erro 400 e a mensagem "Invalid fields"', async () => {
      sinon.stub(User, 'findOne').resolves();
      
      const response = await request(app)
        .post('/register')
        .send(mockUserWithoutUsername);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: messageErrors.FIELDS_INV });
    });
  });

  describe('3 - Ao não passar um email', () => {
    test('Retorna erro 400 e a mensagem ""email" is not allowed to be empty"', async () => {
      sinon.stub(User, 'findOne').resolves();
      
      const response = await request(app)
        .post('/register')
        .send(mockUserWithoutEmail);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: messageErrors.EMAIL_IS_NOT });
    });
  });

  describe('4 - Ao passar um email com o formato invalido', () => {
    test('Retorna erro 400 e a mensagem ""email" must be a valid email"', async () => {
      sinon.stub(User, 'findOne').resolves();
      
      const response = await request(app)
        .post('/register')
        .send(mockUserInvalidEmail);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: messageErrors.EMAIL_VALID });
    });
  });

  describe('5 - Ao não passar uma senha', () => {
    test('Retorna erro 400 e a mensagem ""password" is not allowed to be empty"', async () => {
      sinon.stub(User, 'findOne').resolves();
      
      const response = await request(app)
        .post('/register')
        .send(mockUserWithoutPassword);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: messageErrors.PASSWORD_IS_NOT })
    });
  });

  describe('6 - Ao passar uma senha com menos de 6 caracteres', () => {
    test('Retorna erro 400 e a mensagem ""password" length must be 6 characters long', async () => {
      sinon.stub(User, 'findOne').resolves();
      
      const response = await request(app)
        .post('/register')
        .send(mockUserInvalidPassword);

      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: messageErrors.PASSWORD_LENGTH })
    });
  });

  describe('7 - Ao fazer uma requisição valida', () => {
    test('Retorna status 201, o usuário criado e um token', () => {
      let response: Response;

      beforeEach(async() => {
        sinon.stub(User, 'findOne').resolves(null);
        sinon.stub(User, 'create').resolves( mockRegisterModelReturn as any);

        response = await request(app)
          .post('/register')
          .send(mockValidUser);
      });

      afterEach(() => {
        sinon.restore();
      });

      it( async() => {
        expect(response).to.have.status(201);
        expect(response.body).to.have.property('token');
      });
      });
  });
});