import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/layout';
import SearchBar from './components/searchBar';
import FormModal from './components/formModal';
import ModalButton from './components/modalButton';
import NoteList from './components/noteList';

import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.mainApp}>
        <Layout>
          <SearchBar />
          <div className={classes.btnContainer}>
            {/* pass notes n setNotes to Tabs 
            when user click tab === category
            create filteredNote state in component 
            setFilteredNote(notes.filter(category))
            setNote(fitleredNote)  */}
            <div>Tabs</div>
            <ModalButton handleOpen={handleOpen} />
          </div>
          <FormModal
            setNotes={setNotes}
            openModal={openModal}
            handleClose={handleClose}
          />
          <NoteList notes={notes} handleOpen={handleOpen} />
        </Layout>
      </div>
    </>
  );
}

export default App;
