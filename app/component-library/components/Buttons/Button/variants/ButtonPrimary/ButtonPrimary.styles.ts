// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';
import { lightTheme } from '@metamask/design-tokens';

// External dependencies.
import { Theme } from '../../../../../../util/theme/models';

// Internal dependencies.
import { ButtonPrimaryStyleSheetVars } from './ButtonPrimary.types';

/**
 * Style sheet function for ButtonPrimary component.
 *
 * @param params Style sheet params.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: ButtonPrimaryStyleSheetVars;
}) => {
  const { vars } = params;
  const { colors } = lightTheme;
  const { style, isDanger, pressed } = vars;
  const colorObj = isDanger ? colors.error : colors.primary;

  return StyleSheet.create({
    base: Object.assign(
      {
        backgroundColor: pressed ? colorObj.alternative : colorObj.default,
      } as ViewStyle,
      style,
    ) as ViewStyle,
  });
};

export default styleSheet;
