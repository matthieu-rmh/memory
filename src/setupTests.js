// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import chai from 'chai'
import { configure as configureEnzyme } from 'enzyme'
import createChaiEnzyme from 'chai-enzyme'
import createChaiJestDiff from 'chai-jest-diff'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import chaiJestSnapshot from 'chai-jest-snapshot'
import enzymeToJSON from 'enzyme-to-json/serializer'

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(chaiJestSnapshot)
  .use(createChaiEnzyme())
  .use(sinonChai)

configureEnzyme({ adapter: new Adapter() })