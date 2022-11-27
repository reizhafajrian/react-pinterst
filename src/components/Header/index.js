import React from 'react'
import { Flex, Input, List, ListItem, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoIosNotifications } from 'react-icons/io';
import { FiChevronDown } from 'react-icons/fi';
import Avatar from 'react-avatar';
import {
  AiFillMessage, AiOutlineSearch
} from 'react-icons/ai';
import { TextStyle } from '../../style/styles';
import CONSTANTS from '../../constants/constants';

export default function index() {

  const { margin: { four }, size:{iconSize} } = CONSTANTS


  return (
    <Flex
      height={16}
      alignItems={"center"}
      paddingX={four}
    >
      <List flexDirection={"row"} display={"flex"}>
        <ListItem {...TextStyle} >Home</ListItem>
        <ListItem {...TextStyle} >Today</ListItem>
        <ListItem {...TextStyle} >Create</ListItem>
      </List>
      <Flex
        width={"100%"}
        bg={"gray.200"}
        borderRadius={30}
        alignItems={"center"}
      >
        <AiOutlineSearch style={{
          marginLeft: 10,
        }} />
        <Input width={"90%"} placeholder='Search' borderRadius={30} />
      </Flex>
      <List flexDirection={"row"} display={"flex"}>
        <ListItem marginX={four} ><IoIosNotifications size={iconSize} /></ListItem>
        <ListItem marginX={four} ><AiFillMessage size={iconSize} /></ListItem>
      </List>
      <Avatar style={{
        marginLeft: 10,
      }} name='Foo Bar' size={30}
        round={true}
      />
      <Menu>
        <MenuButton
          marginX={four}          >
          <FiChevronDown />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
