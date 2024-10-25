import { Field, FieldType, PanelPlugin } from '@grafana/data';
import { PanelOptions } from './types';
import { ImagePanel } from './components/imagePanel/imagePanel';

/**
 * Panel Plugin
 */
export const plugin = new PanelPlugin<PanelOptions>(ImagePanel).setPanelOptions((builder) => {

  builder.addFieldNamePicker({
    path: 'name',
    name: 'Field name',
    description: 'Name of the field with URL. If not specified, first field will be taken',
    settings: {
      filter: (f: Field) => f.type === FieldType.string,
      noFieldsMessage: 'No string fields found' 
    }
  })

  return builder;

    // .addTextInput({
    //   path: 'url',
    //   name: 'Image URL',
    //   // description: 'Description of panel option',
    //   defaultValue: 'https://',
    // })
    // .addBooleanSwitch({
    //   path: 'showSeriesCount',
    //   name: 'Show series counter',
    //   defaultValue: false,
    // })
    // .addRadio({
    //   path: 'seriesCountSize',
    //   defaultValue: 'sm',
    //   name: 'Series counter size',
    //   settings: {
    //     options: [
    //       {
    //         value: 'sm',
    //         label: 'Small',
    //       },
    //       {
    //         value: 'md',
    //         label: 'Medium',
    //       },
    //       {
    //         value: 'lg',
    //         label: 'Large',
    //       },
    //     ],
    //   },
    //   showIf: (config) => config.showSeriesCount,
    // });
});
