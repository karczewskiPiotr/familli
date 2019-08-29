class MyFailureApp < Devise::FailureApp
  def route(_scope)
    :root_path
  end
end
