/**
 * @file Holds the matchMedia utility
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */

export default () => {
  if (window.matchMedia('(max-width: 766px)').matches) {
    return 'mobile';
  }

  else return 'desktop';
};