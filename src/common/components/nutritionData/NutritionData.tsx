import { VFC } from 'react';
import useNutritionData from './useNutritionData.hook';
import Chart from 'react-apexcharts';
import { INutritionData } from '../../../types';
import styles from './nutritionData.module.scss';

interface INutritionDataProps {
  nutritionData: INutritionData;
}

const NutritionData: VFC<INutritionDataProps> = ({ nutritionData }) => {
  const { options, series, nutrients, getCaloryContribution, unit, calories } =
    useNutritionData(nutritionData);

  return (
    <div className={styles.nutritionData}>
      <h3 className='sectionTitle'>Nutrition</h3>

      {/* Nutrition Facts; TODO: Break into separate component */}
      <ul className={styles.nutritionFacts}>
        <li className='nutritionFact'>
          <span className='nutritionFactLabel'>Calories</span>
          <span className='nutritionFactValue'>{calories}</span>
        </li>

        {nutrients.map(({ key, label, grams }) => {
          return (
            <li key={key} className='nutritionFact'>
              <span className='nutritionFactLabel'>{label}</span>
              <span className='nutritionFactValue'>{`${
                grams || '-'
              }${unit}`}</span>
            </li>
          );
        })}
      </ul>

      {/* Calorie Chart; TODO: Break into separate component */}
      <div className={styles.chart}>
        <div className='chartContainer'>
          {series?.length > 0 && (
            <Chart options={options} type='donut' series={series} width='300' />
          )}

          <div className='chartTotal'>
            <span className='chartTotalValue'>{nutritionData.calories}</span>

            <span className='chartTotalLabel'>Calories</span>
          </div>
        </div>

        <ul className='legend'>
          {nutrients.map(({ key, label, actualCalories }) => (
            <li
              key={key}
              className='legendItem'
              data-type={label.toLowerCase()}
            >
              <span className='legendItemValue'>
                {getCaloryContribution(actualCalories || 0)}%
              </span>
              <span className='legendItemLabel'>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionData;
