require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'GET #index' do
    before { get :index }

    describe 'successful response' do
      it { expect(response).to be_successful }
      it { expect(response).to render_template('index') }
    end
  end
end
