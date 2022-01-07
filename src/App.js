import styled from 'styled-components';
import Navbar from './components/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer';

const App = () => {
    return (
        <Container>
            <Navbar />
            <Section />
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    padding: 0;
    margin: 0;
    background: #2c6dff;
    height: 100vh;
`;

export default App;
