import Select from '../../lib/fields/Select';

const options = {
  male: 'Male',
  female: 'Female'
};

describe('Select', () => {

  it('should have multiple options', () => {
    const select = $(render(<Select options={options}/>).element);
    expect(select.find('option').length).to.be.equal(2);
  });

  it('should have a placeholder option', () => {
    const select = $(render(<Select options={options} placeholder="Please choose your gender..."/>).element);
    expect(select.find('option').length).to.be.equal(3);
    expect(select.find('option').first.hasText('Please choose your gender...')).to.be.true;
  });

  it('should set different values on the options', () => {
    const select = $(render(<Select options={options}/>).element);
    expect(select.find('option').first.hasProp('value', 'male')).to.be.true;
    expect(select.find('option').last.hasProp('value', 'female')).to.be.true;
  });

  it('should set different labels on the options', () => {
    const select = $(render(<Select options={options}/>).element);
    expect(select.find('option').first.hasText('Male')).to.be.true;
    expect(select.find('option').last.hasText('Female')).to.be.true;
  });

});