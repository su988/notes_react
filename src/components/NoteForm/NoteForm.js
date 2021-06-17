import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@material-ui/core';

import useStyles from './styles';

export const NoteForm = ({
  handleClose,
  addNote,
  editNote,
  id,
  selectedNote,
  isEdit,
}) => {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    isEdit ? editNote(data, id) : addNote(data);
    handleClose();
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.inputContainer}>
          <Box className={classes.textfield}>
            <Controller
              name="title"
              control={control}
              defaultValue={isEdit ? selectedNote.title : ''}
              rules={{ required: 'Title is required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    placeholder="Add title..."
                    InputProps={{
                      disableUnderline: true,
                      className: classes.inputTitle,
                    }}
                    value={value}
                    onChange={onChange}
                  />
                  <FormHelperText className={classes.error}>
                    {error?.message}
                  </FormHelperText>
                </>
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue={isEdit ? selectedNote.description : ''}
              rules={{ required: 'Description required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <TextField
                    placeholder="Add description..."
                    multiline
                    rows={9}
                    InputProps={{
                      disableUnderline: true,
                      className: classes.description,
                    }}
                    value={value}
                    onChange={onChange}
                    className={classes.description}
                  />
                  <FormHelperText className={classes.error}>
                    {error?.message}
                  </FormHelperText>
                </>
              )}
            />
          </Box>

          <Controller
            name="category"
            control={control}
            defaultValue={isEdit ? selectedNote.category : ''}
            rules={{ required: 'Category required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl className={classes.formControl}>
                <InputLabel shrink={false} className={classes.label}>
                  {value ? '' : 'Select Category'}
                </InputLabel>
                <Select
                  value={value}
                  onChange={onChange}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                  disableUnderline
                  className={classes.select}
                >
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="work">Work</MenuItem>
                  <MenuItem value="personal">Personal</MenuItem>
                </Select>
                <FormHelperText className={classes.error}>
                  {error?.message}
                </FormHelperText>
              </FormControl>
            )}
          />
        </Box>

        <Box className={classes.btnContainer}>
          <Button onClick={handleClose} className={classes.btn}>
            Cancel
          </Button>
          <Button type="submit" className={classes.btn}>
            {isEdit ? 'Edit' : 'Add'}
          </Button>
        </Box>
      </form>
    </>
  );
};
