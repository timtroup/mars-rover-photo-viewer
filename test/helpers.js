import { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';

global.expect = expect;
global.sinon = sinon;

global.mount = mount;
global.render = render;
global.shallow = shallow;