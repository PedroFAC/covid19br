import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 8,
    flex: 1,
  },
  paper: {
    padding: 16,
  },
  share: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  grid: {
    marginLeft: 0,
    padding: 8,
    flex: 1,
  },
  header: {
    marginLeft: 8,
  },
  number: {
    fontSize: 24,
  },
  progress: {
    marginTop: 40,
    marginBottom: 40,
  },
  buttonAlign: {
    marginTop: 16,
    marginBottom: 16,
  },
  gridLeft: {
    flex: 4,
  },
  gridRight: {
    flex: 8,
  },
});

export default useStyles;
