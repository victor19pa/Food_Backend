import express, { Request, Response, NextFunction } from "express";
import {
  GetFoodAvailability,
  GetFoodIn30Min,
  GetTopRestaurants,
  RestaurantById,
  SearchFoods,
} from "../controllers";

const router = express.Router();

/* food available */
router.get("/:pincode", GetFoodAvailability);

/* top restaurants */
router.get("/top-restaurants/:pincode", GetTopRestaurants);

/* available in 30min */
router.get("/foods-in-30-min/:pincode", GetFoodIn30Min);

/* search foods */
router.get("/search/:pincode", SearchFoods);

/* find by id */
router.get("/restaurant/:id", RestaurantById);

export { router as ShoppingRoute };
