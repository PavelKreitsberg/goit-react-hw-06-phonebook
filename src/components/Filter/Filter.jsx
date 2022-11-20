import React from 'react';
import { Input } from 'components/Input/Input';
import PropTypes from 'prop-types';

export const Filter = ({ query, onChange }) => {
  return (
    <div>
      <Input
        type="text"
        label="find contacts by name"
        name="filter"
        value={query}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
