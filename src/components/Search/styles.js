import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
`

export const Label = styled.label`
  margin: 0 auto;
  width: 200px;
`

export const Input = styled.input`
  width: 200px;
  display: flex;
  padding: 15px;
  background-color: white;
  border: 2px solid black;
  color: #111;
  font-size: 15px;
  box-shadow: 3px 1px 0px 2px, 0px -1px 0px 2px rgba(0, 0, 0, 0.62);
  height: 20px;    
  transform: skew(-3deg, 1deg);
  font-family: 'Knewave', cursive;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:focus,
  &:valid{
    outline: none;
    ~ ul li{
      @for $i from 1 through 6 {
        &:nth-child(#{$i}){
          &::before{
            filter: blur(20px);
            transform: translate(0, -35px) rotate(-210deg);
          }
          &::after{
            filter: blur(0);
            transform: scale(1) rotate(0);
          }
        }
      }
      @for $i from 1 through 6{
        &:nth-child(#{$i}){
          &::after{
            transition-delay: 200ms + ($i * 200ms);
          }
        }
      }
    }
  }
`

export const Ul = styled.ul`
  position: absolute;
  top: 38px;
  left: -4px;
  margin: 0;
  list-style: none;
  padding-left: 22px;
  position: absolute;
  display: flex;
  pointer-events: none;
  transition: 200ms;
  li{
    letter-spacing: 3px;
    text-transform: uppercase;
    color: transparent;
    pointer-events: none;
    transition: 500ms ease-in-out;
    &::selection{
      color: transparent;
    }
    &::after,
    &::before{
      color: black;
      position: absolute;
      transition: 500ms ease-in-out;
    }
    &::before{
      top: -20px;
    }
    &::after{
      top: -63px;
      transform: scale(0) rotate(210deg);
      filter: blur(20px);
    }
    $chars: s,e,a,r,c,h;
    @each $char in $chars {
      $i: index($chars, $char);
      $x: index($chars, $char);
      $i: $i * 200;
      $y: $x * 12;
      &[#{$char}]::before{
        content: attr($char) quote($char);
        transition-delay: $i+ms;
      }
      &[#{$char}]::after{
        content: attr($char) quote($char);
        left: unquote($y+'px');
        color: #666;
      }
    }
  }
`