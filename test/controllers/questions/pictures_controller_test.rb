require "test_helper"

class Questions::PicturesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get questions_pictures_new_url
    assert_response :success
  end

  test "should get edit" do
    get questions_pictures_edit_url
    assert_response :success
  end

  test "should get update" do
    get questions_pictures_update_url
    assert_response :success
  end

  test "should get create" do
    get questions_pictures_create_url
    assert_response :success
  end
end
