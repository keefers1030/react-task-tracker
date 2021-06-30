const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllLeaders, getLeaderSlug, addNewLeader } = require('../../controller/leadersController')
const models = require('../../models')
const { leaders, singleLeader } = require('../mocks/leaders')
const { req } = require('express')

chai.use(sinonChai)
const { expect } = chai

describe('Leaders controller', () => {
  let stubbedFindOne

  before(() => {
    stubbedFindOne = sinon.stub(models.leaders, 'findOne')
  })

  afterEach(() => {
    stubbedFindOne.resetBehavior()
  })

  describe('Get all leaders', () => {
    it('gets all leaders with the provided DB and calls response.send() with it', async () => {
      const stubbedFindAll = sinon.stub(models.leaders, 'findAll').returns(leaders)
      const stubbedSend = sinon.stub()
      const res = { send: stubbedSend }

      await getAllLeaders({}, res)
      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(leaders)
    })
  })

  describe('Get leader by slug', () => {
    it('get a leader from DB using provided slug and calls response.send() with the leader', async () => {
      stubbedFindOne.returns(singleLeader)
      const req = { params: { slug: 'margaret-cho' } }
      const stubbedSend = sinon.stub()
      const res = { send: stubbedSend }

      await getLeaderSlug(req, res)
      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'margaret-cho' } })
      expect(stubbedSend).to.have.been.calledWith(singleLeader)
    })

    it('return a 404 when no leader is found', async () => {
      stubbedFindOne.returns(null)
      const req = { params: { slug: 'not-found' } }
      const stubbedSendStatus = sinon.stub()
      const res = { sendStatus: stubbedSendStatus }

      await getLeaderSlug(req, res)
      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'not-found' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 error with a message', async () => {
      stubbedFindOne.throws('ERROR!')
      const req = { params: { slug: 'error-slug' } }

      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const res = { status: stubbedStatus }

      await getLeaderSlug(req, res)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'error-slug' } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedSend).to.have.been.calledWith('Unable to retrieve a leader, please try again')
    })
  })

  describe('Save new leader', () => {
    it('accepts new leader details and saves to DB, returns the saved leader with a 201 status', async () => {
      const stubbedCreate = sinon.stub(models.leaders, 'create').returns(singleLeader)
      const req = { body: singleLeader }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const res = { status: stubbedStatus }

      await addNewLeader(req, res)

      expect(stubbedCreate).to.have.been.calledWith(singleLeader)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(singleLeader)
    })
  })
})
