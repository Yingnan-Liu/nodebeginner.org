import React from "react";
import PropTypes from "prop-types";
import MuiList from "@material-ui/core/List";
import NoteListItem from "./NoteListItem";
import { NoteEntity } from "../../entities/NoteEntity";
import MuiGrid from "@material-ui/core/Grid/Grid";
import MuiHidden from "@material-ui/core/Hidden/Hidden";
import { withStyles } from "@material-ui/core/styles";
import NoteListItemDetails from "./NoteListItemDetails";

const styles = (theme) => ({
    root: {},
    list: {
        paddingTop: 0
    },
    gridItem: {
        width: "100%"
    }
});

const noteById = (notes, noteId) => {
    for (let i=0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            return notes[i];
        }
    }
    return null;
};

const NoteList = ({ notes, selectedNoteId, handleSelectNote, classes }) => (
    <div>
        <MuiHidden xsDown>
            <MuiGrid container direction="row">
                <MuiGrid item xs={4}>
                    <MuiList className={classes.list}>
                        {notes.map(note => (
                            <NoteListItem key={note.id} note={note} selectedNoteId={selectedNoteId} handleSelectNote={handleSelectNote} />
                        ))}
                    </MuiList>
                </MuiGrid>
                {selectedNoteId != null &&
                    <MuiGrid item xs={8}>
                        <NoteListItemDetails note={noteById(notes, selectedNoteId)} />
                    </MuiGrid>}
            </MuiGrid>
        </MuiHidden>
        <MuiHidden smUp>
            <MuiGrid container direction="row">
                <MuiGrid item className={classes.gridItem}>
                    <MuiList>
                        {notes.map(note => (
                            <NoteListItem key={note.id} note={note} selectedNoteId={selectedNoteId} handleSelectNote={handleSelectNote} />
                        ))}
                    </MuiList>
                </MuiGrid>
            </MuiGrid>
        </MuiHidden>
    </div>
);

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.instanceOf(NoteEntity))
};

export default withStyles(styles)(NoteList);