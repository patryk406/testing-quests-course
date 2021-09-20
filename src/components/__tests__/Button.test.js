import Button from '../button/Button'
import renderer, { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('testing component with jest', () => {
    test('matching component with snapshot', () => {
        const tree = renderer
            .create(<Button />)
            .toJSON()
        expect(tree).toMatchSnapshot();
    })
})
describe('Button component', () => {
    it('should render ok all elements in component', () => {
        const wrapper = shallow(<Button />);
        // counter
        expect(wrapper.find('div span.counter').text()).toBe('0');
        // Minus button
        expect(wrapper.find('div button.reducer').text()).toBe('Minus');
        // Plus button
        expect(wrapper.find('div button.increment').text()).toBe('Plus');
        // Reset button
        expect(wrapper.find('div button.reset').text()).toBe('Reset');
    })
    it('counter should be 0', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('div span.counter').text()).toBe('0');
    })
    it('should be 10 after setting start to 10', () => {
        const wrapper = shallow(<Button start={10} />);
        expect(wrapper.find('div span.counter').text()).toBe('10');
    })
    it('should change counter after giving input some number and clicking change', () => {
        const wrapper = shallow(<Button />);
        let input = wrapper.find('div input.initVal');
        let counter = wrapper.find('div span.counter');

        expect(counter.text()).toBe('0');

        input.simulate('change', { target: { value: 10 } });
        input = wrapper.find('div input.initVal');
        expect(input.props().value).toBe(10);

        const changeBtn = wrapper.find('div button.change');
        changeBtn.simulate('click');

        counter = wrapper.find('div span.counter');
        expect(counter.text()).toBe('10');
    })
    it('should add after clicking plus', () => {
        const wrapper = shallow(<Button start={0} />);
        let counter = wrapper.find('div span.counter');
        const plusBtn = wrapper.find('div button.increment');
        expect(counter.text()).toBe('0');
        plusBtn.simulate('click');
        counter = wrapper.find('div span.counter');
        expect(counter.text()).toBe('1');
    })
    it('should reduce after clicking minus & reset state after clicking reset', () => {
        const wrapper = shallow(<Button start={0} />);
        let counter = wrapper.find('div span.counter')
        const minusBtn = wrapper.find('div button.reducer');
        const resetBtn = wrapper.find('div button.reset');
        expect(counter.text()).toBe('0');
        minusBtn.simulate('click');
        counter = wrapper.find('div span.counter');
        expect(counter.text()).toBe('-1');

        // Simulating reseting of counter

        resetBtn.simulate('click');
        counter = wrapper.find('div span.counter');
        expect(counter.text()).toBe('0');
    })

})