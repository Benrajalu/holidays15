<?php
/**
  Template Name: Homepage
 * @package WordPress
 * @subpackage Holiday
 * @since Holiday 1.0
 */

get_header(); ?>
	<div id="spinner" ng-show="loading"><span class="red"></span><span class="blue"></span><span class="yellow"></span></div>
	<div ng-view class="view">
		
	</div>
	
<?php get_footer(); ?>