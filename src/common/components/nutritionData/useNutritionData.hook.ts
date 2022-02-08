import { useEffect, useState } from 'react';
import { INutrients, INutritionData, NutrientKey } from '../../../types';

const chartFields = [
  {
    key: NutrientKey.Fat,
    label: 'Fat',
    caloriesPerGram: 9,
  },

  {
    key: NutrientKey.Protein,
    label: 'Protein',
    caloriesPerGram: 4,
  },

  {
    key: NutrientKey.Carbs,
    label: 'Carbs',
    caloriesPerGram: 4,
  },
];

const useNutritionLabel = (nutritionData: INutritionData) => {
  const [series, setSeries] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [nutrients, setNutrients] = useState<INutrients[]>([]);

  const colors = ['#36a2eb', '#ffcd56', '#ff6384'];
  const { unit, calories } = nutritionData;

  const options = {
    labels,

    colors,

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      y: {
        formatter: function (value: number) {
          return Math.round((value / totalCalories) * 100) + '%';
        },
      },
    },

    plotOptions: {
      pie: {
        expandOnClick: false,

        donut: {
          size: '70',
        },
      },
    },

    stroke: {
      show: false,
      width: 0,
    },

    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.95,
        },
      },
      active: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
  };

  useEffect(() => {
    let totalCalories = 0;
    const newSeries: number[] = [];
    const newLabels: string[] = [];

    try {
      setNutrients(
        chartFields.map(({ key, ...nutrient }) => {
          if (!nutritionData[key as keyof INutritionData]) {
            throw new Error('Missing label properties!');
          }

          let grams = nutritionData[key];

          if (typeof grams !== 'number') {
            grams = Number(grams);
          }

          let calories = Math.round(grams * nutrient.caloriesPerGram);
          newLabels.push(nutrient.label);
          newSeries.push(calories);

          // Nutrition labels rarely show the correct number of calories
          // forcing us to manually re-calculate this amount in order to
          // get the correct percentages on the chart!
          totalCalories += calories;

          return { key, ...nutrient, grams, actualCalories: calories };
        })
      );

      setTotalCalories(totalCalories);

      // This will re-render the chart
      setLabels(newLabels);
      setSeries(newSeries);
    } catch (error) {
      console.log(error);
    }
  }, [nutritionData]);

  const getCaloryContribution = (calories: number) => {
    if (!totalCalories || !calories) {
      return 0;
    }

    return Math.round((calories / totalCalories) * 100);
  };

  return {
    options,
    series,
    nutrients,
    getCaloryContribution,
    unit,
    calories,
  };
};

export default useNutritionLabel;
