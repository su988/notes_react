import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

// import clsx from 'clsx';
import useStyles from './styles';

function AddNoteForm({ handleClose, addNote }) {
  const { handleSubmit, control } = useForm();
  const classes = useStyles();

  const onSubmit = (data) => {
    addNote(data);
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
              defaultValue=""
              rules={{ required: 'Title is required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  placeholder="Add title..."
                  InputProps={{
                    disableUnderline: true,
                    className: classes.inputTitle,
                  }}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  className={classes.textTitle}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: 'Description required' }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  placeholder="Add description..."
                  multiline
                  InputProps={{
                    disableUnderline: true,
                    className: classes.description,
                    classes: {
                      input: classes.input,
                    },
                  }}
                  value={value}
                  onChange={onChange}
                  className={classes.description}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Box>

          <Controller
            name="category"
            control={control}
            defaultValue=""
            rules={{ required: 'Category required' }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FormControl className={classes.formControl}>
                <InputLabel shrink={false} className={classes.inputLabel}>
                  {value ? '' : 'Select Category'}
                </InputLabel>
                <Select
                  required
                  value={value}
                  onChange={onChange}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                  error={!!error}
                  helpertext={error ? error.message : null}
                  disableUnderline
                  className={classes.select}
                >
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="work">Work</MenuItem>
                  <MenuItem value="personal">Personal</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Box>

        <Box className={classes.btnContainer}>
          <Button onClick={handleClose} className={classes.btn}>
            Cancel
          </Button>
          <Button type="submit" className={classes.btn}>
            Add
          </Button>
        </Box>
      </form>
    </>
  );
}

export default AddNoteForm;
