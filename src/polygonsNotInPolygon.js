import * as turf from "@turf/turf";

/**
 * A helper function that returns those polygons that are not contained within
 * some target polygon.
 *
 * @param {FeatureCollection} polygons
 * @param {Feature} targetPolygon
 * @return FeatureCollection A feature collection containing all the polygons
 *   that are within the target polygon.
 */
function polygonsNotInPolygon(polygons, targetPolygon) {
  const polygonsToKeep = turf.featureReduce(
    polygons,
    (accumulator, currFeature) => {
      if (!turf.booleanContains(targetPolygon, currFeature)) {
        accumulator.push(currFeature);
      }
      return accumulator;
    },
    []
  );

  return turf.featureCollection(polygonsToKeep);
}

export { polygonsNotInPolygon };
