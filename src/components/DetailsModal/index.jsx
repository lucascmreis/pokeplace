import {useState, useEffect} from 'react'
import Modal from 'react-modal'
import {api} from '../../services/api'
import closeImg from '../../assets/close.svg'


import {Container, ImageWrapper, ContentWrapper } from './styles'



export function DetailsModal({isOpen, onRequestClose, pokemonDetails}){  
  
  console.log(pokemonDetails)

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      className="react-modal-content-details"
      overlayClassName="react-modal-overlay"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close" 
      >
        <img src={closeImg} alt="close" />
      </button>

      <Container >
        <ImageWrapper>
          <div>
            <h3> # {pokemonDetails.id} </h3>
            <img src={pokemonDetails.imageUrl} alt={pokemonDetails.name} />
            <h2> {pokemonDetails.name} </h2>
          </div>
        </ImageWrapper>

        <ContentWrapper>

          <div>
            <h3>Abilities</h3>
            <ul>
              {pokemonDetails.abilities.map((ability)=>{
                return(
                  <li key={ability.ability.name} >
                    <p> {ability.ability.name} </p>
                  </li>
                )
              }) }  
            </ul>
          </div>

          <div>
            <h3>Height</h3>
            <p> {pokemonDetails.height *10} cm </p>
          </div>
          
          
          <div>
            <h3>Weight</h3>
            <p> {pokemonDetails.weight /10} kg </p>
          </div>

          <div>
            <h3>Type</h3>
            <ul>
              {pokemonDetails.types.map((type)=>{
                return(
                  <li key={type.type.name} >
                    <p> {type.type.name} </p>
                  </li>
                )
              }) }  
            </ul>
          </div>

        </ContentWrapper>

      </Container> 
    </Modal>
  )
}