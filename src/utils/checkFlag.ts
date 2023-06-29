export const checkFlag = (flag: string) => {
    if(flag === '1N' || flag === '1E' || flag === '1M' || flag === '1A')
        return true;
    else return false;
}