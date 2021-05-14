import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './styles';

function NoteForm({ handleClose }) {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    handleClose();
    console.log(data);
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputContainer}>
          <div className={classes.textfield}>
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
                    classes: {
                      input: classes.input,
                    },
                  }}
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  className={classes.title}
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
                  InputProps={{
                    disableUnderline: true,
                    className: classes.description,
                    classes: {
                      input: classes.input,
                    },
                  }}
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  className={classes.description}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Controller
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Select
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helpertext={error ? error.message : null}
                >
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="work">Work</MenuItem>
                  <MenuItem value="personal">Personal</MenuItem>
                </Select>
              )}
              name="category"
              rules={{ required: 'Category is required' }}
              control={control}
              defaultValue=""
            />
          </FormControl>
        </div>

        <div className={classes.btnContainer}>
          <Button onClick={handleClose} className={classes.btn}>
            Cancel
          </Button>
          <Button type="submit" className={classes.btn}>
            Add
          </Button>
        </div>
      </form>
    </>
  );
}

export default NoteForm;
