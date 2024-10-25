import React from 'react';
import { FieldType, PanelProps } from '@grafana/data';
import { PanelOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2} from '@grafana/ui';
//import { PanelDataErrorView } from '@grafana/runtime';
import { Styles } from 'styles';

/**
 * Properties
 */
interface Props extends PanelProps<PanelOptions> {}

/**
 * Image Panel
 * @param param0 
 * @returns 
 */
export const ImagePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  //const theme = useTheme2();
  const styles = useStyles2(Styles);

  // if (data.series.length === 0) {
  //   return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  // }

  let src = data.series
  .map((series) => {
    series.fields.find((field) => field.type === FieldType.string && (!options.name || field.name === options.name)) 
  })
  //.map((field) => field?.values.get(field.values.length-1))
  .toString()

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <img
        className={styles.img}
        width={width}
        height={height}
        src={src}
        // xmlns="http://www.w3.org/2000/svg"
        // xmlnsXlink="http://www.w3.org/1999/xlink"
        // viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        {/* <g>
          <circle data-testid="simple-panel-circle" style={{ fill: theme.colors.primary.main }} r={100} />
        </g> */}
      </img>

      {/* <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div data-testid="simple-panel-series-counter">Number of series: {data.series.length}</div>
        )}
        <div>Text option value: {options.text}</div>
      </div> */}
    </div>
  );
};
