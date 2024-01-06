import { useLocalization } from '../localization/LocalizationContext';
import { translations } from '../utils/constants';

const useTranslatedConstants = () => {
  const { lang } = useLocalization();
  return translations[lang];
};

export default useTranslatedConstants;
