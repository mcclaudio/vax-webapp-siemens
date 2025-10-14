import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import TreeView from 'devextreme-react/tree-view';
import { navigation } from '../../AppNavigation'

function Sidebar({ isOpen }) {
  const navigate = useNavigate()

  const handleTreeViewSelectionChange = useCallback(
    (e) => {
      const selectedNavLink = e.itemData;
      if (selectedNavLink.path) {
        navigate(selectedNavLink.path);
      }
    }, [],
  );

  return (
    <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <nav>
        <TreeView dataSource={navigation}
          onItemSelectionChanged={handleTreeViewSelectionChange}
          selectionMode="single" selectByClick={true} />
      </nav>
    </aside>
  );
}

export default Sidebar;
