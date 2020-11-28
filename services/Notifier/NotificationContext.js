import React, { useContext } from 'react';

export const NotificationContext = React.createContext();

export const useNotificationService = () => {
  const notificationContext = useContext(NotificationContext);
  return notificationContext;
};
