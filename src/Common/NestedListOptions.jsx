import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedListOptions({item}) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
        setOpen(!open);
    } else {
        navigate(item.path);
    }
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={item.title} />  
        {hasChildren ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItemButton>

      {hasChildren && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {item.children.map((subItem, index) => (
                    <ListItemButton 
                        key={index} 
                        sx={{ pl: 4 }}
                        onClick={() => navigate(subItem.path)}
                    >
                        <ListItemText primary={subItem.title} />
                    </ListItemButton>
                ))}
            </List>
          </Collapse>
      )}
    </List>
  );
}
