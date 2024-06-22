import moment from 'moment';

//  timestamp converter 
export const convertTimeStamp = ({ timestamp }) => {
  const formattedDate = moment(timestamp).format('MMM Do, YYYY h:mm A');
  return formattedDate;
}