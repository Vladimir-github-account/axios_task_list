import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import styles             from './DropMenu.module.sass';

class DropMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.menuRef = React.createRef();
  }

  openMenu = () => {
    this.setState({
                    isOpen: true
                  });
  };

  closeMenu = () => {
    this.setState({
                    isOpen: false
                  });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.dir(this.menuRef);
  }

  onOutsideClick = (e) => {
    if (this.state.isOpen && !this.menuRef.current.contains(e.target)) {
      this.closeMenu();
    }
  };

  componentDidMount() {
    window.addEventListener('click', this.onOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onOutsideClick);
  }

  render() {
    return (
        <div ref={this.menuRef}>
          <header>
            <button onClick={this.openMenu}>Open</button>
          </header>
          {
            this.state.isOpen &&
            <div className={styles.container}>
              <button onClick={this.closeMenu}>X</button>
              <nav>
                <ul>
                  <li>NavItem1</li>
                  <li>NavItem2</li>
                  <li>NavItem3</li>
                  <li>NavItem4</li>
                  <li>NavItem5</li>
                  <li>NavItem6</li>
                </ul>
              </nav>
            </div>
          }
        </div>
    );
  }
}

DropMenu.propTypes = {};

export default DropMenu;