import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export default function PageHeader({ title, pathToReturn }) {
  return (
    <Container>
      <Link to={pathToReturn}>
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  pathToReturn: PropTypes.string,
};

PageHeader.defaultProps = {
  pathToReturn: '/',
};
