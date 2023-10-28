import { ReactComponent as GreenTick } from "../SVG/greenTick.svg";
import { ReactComponent as ErrorSvg } from "../SVG/error.svg";
import { ReactComponent as CrossSvg } from "../SVG/cross.svg";

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const throttle = (func, delay) => {
  let lastExecuted = 0;
  let timeoutId;

  return function (...args) {
    const now = Date.now();
    clearTimeout(timeoutId);
    if (now - lastExecuted >= delay) {
      func.apply(this, args);
      lastExecuted = now;
      return;
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      lastExecuted = now;
    }, delay - (now - lastExecuted));
  };
};

export const isValidMobileNumber = (number) => {
  const IndNum = /^[0]?[6789]\d{9}$/;
  return IndNum.test(number);
};

export const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  CANCEL: "cancel"
};

export const getMobileNumberStatus = (number) => {
  if (!number.length) {
    return null;
  }
  if (number.length < 10) {
    return STATUS.CANCEL;
  }
  if (isValidMobileNumber(number)) {
    return STATUS.SUCCESS;
  }
  return STATUS.ERROR;
};

export const isButtonDisabled = (number) => {
  const status = getMobileNumberStatus(number);
  if (!status || status === STATUS.SUCCESS) {
    return false;
  }
  return true;
};

export const getIcon = (number) => {
  const status = getMobileNumberStatus(number);
  switch (status) {
    case STATUS.SUCCESS:
      return <GreenTick />;
    case STATUS.CANCEL:
      return <CrossSvg />;
    case STATUS.ERROR:
      return <ErrorSvg />;
    default:
      return null;
  }
};
