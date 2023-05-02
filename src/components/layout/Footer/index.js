import React from 'react'
import "./style.scss"
import { useSelector, useDispatch } from 'react-redux'
import { setActiveTab } from '../../../redux/slice/activeTabSlice'

const Footer = () => {

  
  const activeTab = useSelector((state) => state.activeTab.currState);

  console.log(activeTab,'curr tab')

  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setActiveTab(activeTab+1))
    console.log('next pressed');
  }

  return (
    <div className='footer-component'>
      <button className='footer-btn' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Footer
