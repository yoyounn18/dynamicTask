import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// 전달한 props로 style을 컨트롤 해보면서 props의 움직임 학습
const Header = ({ title, onClick, btnText }) => {

    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color={'green'} text={btnText ? 'Close' : 'Add'} onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
